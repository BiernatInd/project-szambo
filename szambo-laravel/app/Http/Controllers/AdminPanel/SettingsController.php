<?php

namespace App\Http\Controllers\AdminPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function downloadAdmin() {
        $admin = User::where('role', 'admin')->get();
        return response()->json(['admin' => $admin]);
    }

    public function changeAdminEmail(Request $request, $id)
    {
        $request->validate([
            'new_email' => 'required|email',
            'password' => 'required',
        ]);

        $admin = User::findOrFail($id);

        if (!Hash::check($request->password, $admin->password)) {
            return response()->json(['error' => 'Nieprawidłowe hasło'], 401);
        }

        $admin->email = $request->new_email;
        $admin->save();

        return response()->json(['message' => 'Adres e-mail został pomyślnie zmieniony']);
    }
}
