<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkpoints extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'resi',
        'cp1',
        'cp2',
        'cp3',
        'cp4',
        'cp5',
        'cp6',
        'cp7',
        'cp8',
        'cp9',
        'cp10',
    ];
}
