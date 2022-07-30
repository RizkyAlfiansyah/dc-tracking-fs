<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrisonersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('prisoners')->insert([
                'nama' => 'Surat Keterangan ' . $i,
                'resi' => 'NP00' . $i . 'MRS',
                'status' => 'Dalam Perjalanan',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
