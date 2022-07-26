<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            'documents' => Documents::paginate(10),
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
     * @param  \App\Models\documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, documents $documents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\documents  $documents
     * @return \Illuminate\Http\Response
     */
    public function destroy(documents $documents)
    {
        //
    }
}
