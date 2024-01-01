<?php

namespace App\Http\Controllers\Sitemap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog\BlogList;

class SitemapController extends Controller
{
    public function generate()
    {
        $entries = BlogList::all();

        $xml = new \XMLWriter();
        $xml->openMemory();
        $xml->setIndent(true);
        $xml->startDocument('1.0', 'UTF-8');
        $xml->startElement('urlset');
        $xml->writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

        // Dodaj statyczne ścieżki
        $this->addUrl($xml, 'http://szambo-na-lata.pl/', '2023-10-10T00:00:00+00:00', 'monthly', 0.8);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/piwniczki-ogrodowe', '2023-10-10T00:00:00+00:00', 'weekly', 0.7);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/oferta', '2023-10-10T00:00:00+00:00', 'monthly', 0.7);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/cennik', '2023-10-10T00:00:00+00:00', 'monthly', 0.6);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/o-naszej-firmie', '2023-10-10T00:00:00+00:00', 'monthly', 0.6);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/kontakt', '2023-10-10T00:00:00+00:00', 'monthly', 0.6);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/polityka-prywatnosci', '2023-10-10T00:00:00+00:00', 'monthly', 0.5);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/blog', '2023-10-10T00:00:00+00:00', 'weekly', 0.5);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/logowanie', '2023-10-10T00:00:00+00:00', 'monthly', 0.4);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/rejestracja', '2023-10-10T00:00:00+00:00', 'monthly', 0.4);
        $this->addUrl($xml, 'http://szambo-na-lata.pl/odzyskiwanie-hasla', '2023-10-10T00:00:00+00:00', 'monthly', 0.3);

        foreach ($entries as $entry) {
            $url = 'http://szambo-na-lata.pl/artykul/' . $entry->nazwa;
            $lastmod = $entry->updated_at->toIso8601String();
            $this->addUrl($xml, $url, $lastmod, 'weekly', 0.6);
        }

        $xml->endElement();
        $xmlContent = $xml->outputMemory();

        return response($xmlContent)->header('Content-Type', 'text/xml');
    }

    private function addUrl(\XMLWriter $xml, $loc, $lastmod, $changefreq, $priority)
    {
        $xml->startElement('url');
        $xml->writeElement('loc', $loc);
        $xml->writeElement('lastmod', $lastmod);
        $xml->writeElement('changefreq', $changefreq);
        $xml->writeElement('priority', $priority);
        $xml->endElement();
    }
}