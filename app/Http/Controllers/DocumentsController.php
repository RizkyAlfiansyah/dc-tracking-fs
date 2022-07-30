<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Faker\Generator as Faker;

class DocumentsController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        //
        return Inertia::render('Overview', [
            'documents' => Documents::all(),
            'pathname' => 'dashboard',
        ]);
    }

    // public function data()
    // {
    //     //
    //     return Inertia::render('Data', [
    //         'documents' => documents::all(),
    //         'pathname' => 'data',
    //     ]);
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // cretae new document
        return Inertia::render('CreateDocument', [
            'documents' => documents::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        // $req = array_push($request->all(), [
        //     'uuid' => $this->faker->randomNumber(8),
        //     'resi' => $this->faker->randomNumber(8),
        //     'created_at' => now(),
        // ]);

        $faker = app(Faker::class);

        $request->request->add([
            'id_prisoner' => $faker->unique()->randomNumber(8),
            'created_at' => now(),
        ]);

        $request->validate([
            'nik' => 'required',
            'nama' => 'required',
            'id_prisoner' => 'required',
        ]);
        $document = Documents::create($request->all());
        $document->save();
        return redirect()->route('dashboard')->with('success', 'Berhasil tambah data.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function show(documents $documents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function edit(documents $documents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Documents $documents)
    {
        //
        // dd($request->all());
        $request->validate([
            'nik' => 'required',
            'nama' => 'required',
            'id_prisoner' => 'required',
            'status' => 'required',
        ]);

        $documents->find($request->id)->update($request->all());
        return redirect()->route('dashboard')->with('success', 'Data Berhasil di ubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function destroy(Documents $documents, Request $id)
    {
        //
        // dd($documents->where('id', $id));
        // $documents::where('id', $id)->firstorfail()->delete();
        // $documents->find($id->id)->delete();
        Documents::destroy($id->id);
        return redirect()->route('dashboard')->with('success', ' Data Berhasil di hapus.');
    }
}
