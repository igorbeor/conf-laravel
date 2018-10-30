<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'tretyak_io@groupbwt.com',
            'password' => Hash::make('admin'),
            'role' => 2
        ]);
    }
}
