<?php

use Faker\Generator as Faker;

$factory->define(App\Participant::class, function (Faker $faker) {
    return [
        'firstName' => $faker->firstName,
        'lastName' => $faker->lastName,
        'birthdate' => $faker->date(),
        'reportSubject' => $faker->paragraph,
        'country' => $faker->country,
        'phone' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'company' => $faker->company,
        'position' => $faker->word,
        'aboutMe' => $faker->paragraph
    ];
});
