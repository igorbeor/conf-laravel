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

Route::get('/', 'ParticipantController@create');
Route::get('/list', 'ParticipantController@index');
Route::get('/addition', 'ParticipantController@edit');

Route::post('/participant/store', 'ParticipantController@store');
Route::post('/participant/update', 'ParticipantController@update');
Route::post('/hide', 'ParticipantController@hide');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
