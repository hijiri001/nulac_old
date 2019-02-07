<?php

// 1.
Route::get('/user', function () {
    return Auth::user();
});

// 2.
Route::get('/message', function () {
    return ['text' => 'Hello, ' . Auth::user()->name];
})->middleware('auth');

// 3.
Auth::routes();
