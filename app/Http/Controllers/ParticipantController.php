<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreParticipantRequest;
use App\Http\Requests\UpdateParticipantRequest;
use App\Participant;
use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PragmaRX\Countries\Package\Countries;

class ParticipantController extends Controller
{
    function index() {
        $participants = Participant::all();
        return view('welcome', ['participants' => $participants]);
    }

    function create() {
        $countries = new Countries;
        $countries = $countries->all()->pluck('name.common')->toArray();
        return view('form', ['countries' => $countries, 'pcount' => Participant::all()->count()]);
    }

    function edit() {
        return view('addition', ['pcount' => Participant::all()->count()]);
    }

    function store(StoreParticipantRequest $request) {
        $data = $request->validated();
        $p = new Participant;
        $p->first_name = $data['first_name'];
        $p->last_name = $data['last_name'];
        $p->birthdate = $data['birthdate'];
        $p->report_subject = $data['report_subject'];
        $p->country = $data['country'];
        $p->phone = $data['phone'];
        $p->email = $data['email'];

        $p->save();
//        return redirect('/');
    }

    function update(UpdateParticipantRequest $request) {
        $data = $request->validated();
        $email = $data['email'];
        $p = Participant::where('email', $email)->first();
        $p->company = $data['company'];
        $p->position = $data['position'];
        $p->about_me = $data['about_me'];
//        $p->photo = $data['photo'];

        $p->save();
    }
}
