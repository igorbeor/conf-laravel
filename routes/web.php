<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;

//Route::get('/{any}', 'ParticipantController@index')->where('any', '.*');
Route::get('/{any}', function() {
    return view('form');
})->where('any', '[a-zA-Z]*');

// API
Route::prefix('api')->group(function() {
    Route::get('/list', 'ParticipantController@index');
    Route::post('/participant/store', 'ParticipantController@store');
    Route::post('/participant/update', 'ParticipantController@update');
});

//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
//
//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
