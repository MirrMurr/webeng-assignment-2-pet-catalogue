<?php

namespace Database\Seeders;

use App\Models\Pet;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pets')->truncate();

        Pet::create([
          'name' => 'Liza',
          'species' => 'Dog',
          'dateOfBirth' => '1988-04-03',
          'dateOfDeath' => '2004-06-23',
          'note' => 'Very playful one, loves water hoses.',
        ]);
        Pet::create([
          'name' => 'Kira',
          'species' => 'Dog',
          'dateOfBirth' => '2007-06-01',
          'dateOfDeath' => '2022-05-14',
          'note' => 'Forever rebel.',
        ]);
        Pet::create([
          'name' => 'Alex',
          'species' => 'Dog',
          'dateOfBirth' => '2013-08-09',
          'note' => 'Loves petting, will not grow up.',
        ]);
        Pet::create([
          'name' => 'Odin',
          'species' => 'Dog',
          'dateOfBirth' => '2017-07-04',
          'note' => 'A stick rather amazes him, than a petting hand. Favorite word: "walkies?"',
        ]);
        Pet::create([
          'name' => 'Pityuka',
          'species' => 'Cat',
          'dateOfBirth' => '',
          'note' => 'The cat reincarnation of Buddha.',
        ]);
        Pet::create([
          'name' => 'Szotyika',
          'species' => 'Cat',
          'dateOfBirth' => '',
          'note' => "She's quite untrustful at first, but with a little treat, she softens up.",
        ]);

    }
}
