<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use App\Models\Prisoners;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Faker\Generator as Faker;

class PrisonersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Data', [
            'documents' => Documents::all(),
            'pengajuan' => Prisoners::all(),
            'pathname' => 'data',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $faker = app(Faker::class);

        $request->request->add([
            'id_document' => $faker->unique()->randomNumber(8),
            'resi' => $faker->unique()->randomNumber(8) . "MRS",
            'created_at' => now(),
        ]);

        $request->validate([
            'nama' => 'required',
            'resi' => 'required',
            'id_document' => 'required',
        ]);
        $document = Prisoners::create($request->all());
        $document->save();
        return redirect()->route('data')->with('success', 'Berhasil tambah data.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prisoners  $prisoners 
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $id)
    {
        //
        Prisoners::destroy($id->id);
        return redirect()->route('data')->with('success', ' Data Berhasil di hapus.');
    }
}
