<?php

namespace App\Http\Controllers;

use App\Models\Checkpoints;
use App\Http\Requests\StoreCheckpointsRequest;
use App\Http\Requests\UpdateCheckpointsRequest;

class CheckpointsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreCheckpointsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCheckpointsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Checkpoints  $checkpoints
     * @return \Illuminate\Http\Response
     */
    public function show(Checkpoints $checkpoints)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Checkpoints  $checkpoints
     * @return \Illuminate\Http\Response
     */
    public function edit(Checkpoints $checkpoints)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCheckpointsRequest  $request
     * @param  \App\Models\Checkpoints  $checkpoints
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCheckpointsRequest $request, Checkpoints $checkpoints)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Checkpoints  $checkpoints
     * @return \Illuminate\Http\Response
     */
    public function destroy(Checkpoints $checkpoints)
    {
        //
    }
}
