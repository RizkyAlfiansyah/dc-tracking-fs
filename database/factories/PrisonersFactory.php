<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prisoners>
 */
class PrisonersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_document' => $this->faker->randomNumber(8),
            'nama' => $this->faker->name,
            'resi' => $this->faker->unique()->randomNumber(8) . "MRS",
            'status' => "Aktif",
        ];
    }
}
