<?php

use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\PrisonersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', [DocumentsController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/data', [PrisonersController::class, 'index'])->middleware(['auth', 'verified'])->name('data');
Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/main', function () {
    return Inertia::render('Main');
})->name('main');

//Routing untuk data warga binaan
Route::post(
    '/data',
    [
        DocumentsController::class,
        'store',
    ]
)->name('data.store');

Route::post(
    '/data/update',
    [
        DocumentsController::class,
        'update',
    ]
)->name('data.update');

Route::post(
    '/data/delete',
    [
        DocumentsController::class,
        'destroy',
    ]
)->name('data.delete');

//routing untuk pengajuan surat
Route::post(
    '/pengajuan',
    [
        PrisonersController::class,
        'store',
    ]
)->name('pengajuan.store');
Route::post(
    '/pengajuan/delete',
    [
        PrisonersController::class,
        'destroy',
    ]
)->name('pengajuan.delete');

require __DIR__ . '/auth.php';
