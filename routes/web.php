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
Route::post(
    '/pengajuan',
    [
        DocumentsController::class,
        'store',
    ]
)->name('pengajuan.store');

Route::post(
    '/pengajuan/update',
    [
        DocumentsController::class,
        'update',
    ]
)->name('pengajuan.update');

Route::post(
    '/data/delete',
    [
        DocumentsController::class,
        'destroy',
    ]
)->name('data.delete');


// Route::get('/dashboard', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Overview');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
