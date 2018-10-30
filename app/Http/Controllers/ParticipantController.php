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

    function store(StoreParticipantRequest $request) {
        $data = $request->validated();
        $participant = new Participant;
        $participant->firstName = $data['firstName'];
        $participant->lastName = $data['lastName'];
        $participant->birthdate = $data['birthdate'];
        $participant->reportSubject = $data['reportSubject'];
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
        } // TODO: Fix upload photo in storage
//        $image = $request->image;  // your base64 encoded
//        $image = str_replace('data:image/png;base64,', '', $image);
//        $image = str_replace(' ', '+', $image);
//        $imageName = str_random(10).'.'.'png';
        $email = $data['email'];
        $participant = Participant::where('email', $email)->first();
        $participant->company = $data['company'];
        $participant->position = $data['position'];
        $participant->aboutMe = $data['aboutMe'];
        $participant->photo = $file_name;

        $participant->save();

        return response(null, Response::HTTP_OK);
    }

    function hide(Request $request) {
        $email = $request->email;
        $participant = Participant::where('email', $email)->first();
        if($participant->hidden == 1){
            $participant->hidden = 0;
        } else {
            $participant->hidden = 1;
        }
        $participant->save();
    }


}
