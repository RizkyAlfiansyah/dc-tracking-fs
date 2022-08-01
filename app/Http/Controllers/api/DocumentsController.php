<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Documents;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\ResponseTrait;
use Faker\Generator as Faker;

class DocumentsController extends Controller
{

    use ResponseTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = Documents::all();
        return response()->json($data, 200);
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
        //
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
        return response()->json($document, 201);
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
        $data = Documents::find($id);
        return response()->json($data, 200);
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

        $request->validate([
            'nik' => 'required',
            'nama' => 'required',
            'status' => 'required',
        ]);
        $data = Documents::findOrFail($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $data = Documents::find($id);
        $data->delete();
        return response()->json([
            'message' => 'Data berhasil dihapus'
        ], 200);
    }
}
