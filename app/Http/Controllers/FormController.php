<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreParticipant;
use Illuminate\Http\Request;
use PragmaRX\Countries\Package\Countries;

class FormController extends Controller
{
    function show() {
        $countries = Countries::all()->pluck('name.common');
        return view('form', ['countries' => $countries]);
    }

    function store(StoreParticipant $request) {
        $validated = $request->validated();
    }
}
