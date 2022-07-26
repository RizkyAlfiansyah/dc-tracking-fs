<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB seed random data

        for ($i = 1; $i <= 10; $i++) {
            DB::table('documents')->insert([
                'name' => 'Surat Keterangan ' . $i,
                'nomor_surat' => $i . '23456789',
                'nik' => '730806080987000' . $i,
                'status' => 'Tidak Aktif',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
