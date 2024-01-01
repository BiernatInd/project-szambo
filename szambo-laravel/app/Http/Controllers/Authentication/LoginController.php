<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $responseData = [
                'message' => 'Zalogowano pomyślnie',
                'user' => [
                    'id' => $user->id,
                    'user_name' => $user->user_name,
                    'email' => $user->email,
                    'role' => $user->role,
                ],
            ];

            return response()->json($responseData, 200);
        }

        return response()->json(['message' => 'Nieprawidłowe dane logowania'], 401);
    }
}
