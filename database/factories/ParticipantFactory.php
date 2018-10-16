<?php

use Faker\Generator as Faker;

$factory->define(App\Participant::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'birthdate' => $faker->date(),
        'report_subject' => $faker->paragraph,
        'country' => $faker->country,
        'phone' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'company' => $faker->company,
        'position' => $faker->word,
        'about_me' => $faker->paragraph
    ];
});
