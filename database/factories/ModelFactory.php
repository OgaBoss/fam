<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Fam\User::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->safeEmail,
        'role' => 'admin',
        'phone' => $faker->phoneNumber,
        'address' => $faker->address,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(Fam\Property::class, function (Faker\Generator $faker) {
    return [
        'pid'                   => $faker->unixTime($max = 'now'),
        'inserted_by'           => 1,
        'name'                  => $faker->name($gender = null|'male'|'female'),
        'address'               => $faker->address,
        'property_type'         => '2-bedroom',
        'bath_number'           => 3,
        'toilet_number'         => 3,
        'bed_number'            => 2,
        'year_built'            => 2000,
        'water'                 => true,
        'good_area'             => 70,
        'security'              => 69,
        'power'                 => 50,
        'Price'                 => 15000000,
        'payment_period'        => 1,
        'hero_image_url'        => null,
        'car_parking'           => 1,
        'garage'                => 0,
        'show_price'            => 0,
        'lat'                   => null,
        'long'                  => null
    ];
});
