<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreParticipantRequest;
use App\Http\Requests\UpdateParticipantRequest;
use App\Participant;
use Illuminate\Http\Request;
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
        return view('form', ['countries' => $countries, 'pcount' => Participant::where('hidden', '0')->count()]);
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
    }

    function update(UpdateParticipantRequest $request) {
        $data = $request->validated();
        $file_name = Null;
        if ($request->hasFile('photo')) {
            $request->file('photo')->store('photos');
            $file_name = $request->file('photo')->hashName();
        }
        $email = $data['additional-email'];
        $p = Participant::where('email', $email)->first();
        $p->company = $data['company'];
        $p->position = $data['position'];
        $p->about_me = $data['about_me'];
        $p->photo = $file_name;

        $p->save();
    }

    function hide(Request $request) {
        $email = $request->email;
        $p = Participant::where('email', $email)->first();

        if($p->hidden == 1){
            $p->hidden = 0;
        } else {
            $p->hidden = 1;
        }


        $p->save();
    }
}
