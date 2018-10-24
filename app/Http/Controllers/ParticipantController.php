<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreParticipantRequest;
use App\Http\Requests\UpdateParticipantRequest;
use App\Participant;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PragmaRX\Countries\Package\Countries;

class ParticipantController extends Controller
{
    function index() {
        return response(Participant::all()->jsonSerialize(), Response::HTTP_OK);
    }

//    function create() {
//        $countries = new Countries;
//        $countries = $countries->all()->pluck('name.common')->toArray();
//        return view('form', ['countries' => $countries, 'pcount' => Participant::where('hidden', '0')->count()]);
//    }
//
//    function edit() {
//        return view('addition', ['pcount' => Participant::all()->count()]);
//    }

    function store(StoreParticipantRequest $request) {
        $data = $request->validated();
        $participant = new Participant;
        $participant->first_name = $data['first_name'];
        $participant->last_name = $data['last_name'];
        $participant->birthdate = $data['birthdate'];
        $participant->report_subject = $data['report_subject'];
        $participant->country = $data['country'];
        $participant->phone = $data['phone'];
        $participant->email = $data['email'];

        $participant->save();
        response($participant->jsonSerialize(), Response::HTTP_CREATED);

    }

    function update(UpdateParticipantRequest $request) {
        $data = $request->validated();
        $file_name = Null;
        if ($request->hasFile('photo')) {
            $request->file('photo')->store('photos');
            $file_name = $request->file('photo')->hashName();
        }
        $email = $data['additional-email'];
        $participant = Participant::where('email', $email)->first();
        $participant->company = $data['company'];
        $participant->position = $data['position'];
        $participant->about_me = $data['about_me'];
        $participant->photo = $file_name;

        $participant->save();

        return response(null, Response::HTTP_OK);
    }

//    function hide(Request $request) {
//        $email = $request->email;
//        $participant = Participant::where('email', $email)->first();
//
//        if($participant->hidden == 1){
//            $participant->hidden = 0;
//        } else {
//            $participant->hidden = 1;
//        }
//
//
//        $participant->save();
//    }
}
