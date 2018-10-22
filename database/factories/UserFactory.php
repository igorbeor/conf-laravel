<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => 'Ihor',
        'email' => 'tretyak_io@groupbwt.com',
        'email_verified_at' => now(),
        'password' => bcrypt('1078z7489'), // secret
        'remember_token' => str_random(10),
        'type' => 'admin'
    ];
});
