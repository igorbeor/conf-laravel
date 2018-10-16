<?php

use Illuminate\Database\Seeder;

class ParticipantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Participant::class, 5)->create();
    }
}
