<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    function show() {
    $participants = \App\Participant::all();
    return view('welcome', ['participants' => $participants]);
}
}
