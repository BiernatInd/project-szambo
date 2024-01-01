<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', 'App\Http\Controllers\Authentication\RegisterController@register');
Route::post('/login', 'App\Http\Controllers\Authentication\LoginController@login');
Route::post('/recover-password', 'App\Http\Controllers\Authentication\RecoverPasswordController@recoverPassword');
Route::post('/reset-password/{token}', 'App\Http\Controllers\Authentication\ResetPasswordController@resetPassword');
Route::post('/blog-add-post', 'App\Http\Controllers\AdminPanel\BlogController@addBlogPost');
Route::post('/blog-add-photo', 'App\Http\Controllers\AdminPanel\BlogController@addBlogPhoto');
Route::post('/blog-add-meta/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@addBlogMeta');
Route::post('/blog-add-content', 'App\Http\Controllers\AdminPanel\BlogController@addBlogContent');
Route::get('/blog-download-content/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@downloadBlogContent');
Route::put('/blog-edit-content/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@editBlogContent');
Route::get('/blog-list', 'App\Http\Controllers\AdminPanel\BlogController@downloadBlogList');
Route::delete('/blog-delete-article/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@deleteBlogArticle');
Route::get('/blog-download-all-data', 'App\Http\Controllers\AdminPanel\BlogController@downloadBlogAllData');
Route::get('/blog-download-article/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@downloadBlogArticle');
Route::get('/blog-download-meta/{slug}', 'App\Http\Controllers\AdminPanel\BlogController@downloadBlogMeta');
Route::get('/users-list', 'App\Http\Controllers\AdminPanel\UsersController@downloadUsersList');
Route::delete('/user-delete/{id}', 'App\Http\Controllers\AdminPanel\UsersController@deleteUser');
Route::get('/admin-account','App\Http\Controllers\AdminPanel\SettingsController@downloadAdmin');
Route::put('/change-email-admin/{id}', 'App\Http\Controllers\AdminPanel\SettingsController@changeAdminEmail');
Route::post('/send-form', 'App\Http\Controllers\Contact\ContactController@sendForm');