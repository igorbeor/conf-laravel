<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreParticipantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|alpha|between:2,50',
            'last_name' => 'required|alpha|between:2,50',
            'birthdate' => 'required|date|after:01-01-1900|before:today',
            'report_subject' => 'required|between:10,255',
            'country' => 'required|between:2,100',
            'phone' => 'required', // array('phone' => 'required', 'required|regex:/^\+?[^a-zA-Z]{5,}$/'),
            'email' => 'required|email|unique:participants,email'
//            'company' => 'alpha_num|between:2,50',
//            'position' => 'required|alpha|between:2,50',
//            'about_me' => 'required|between:10,255',
//            'photo' => 'image'
        ];
    }
}
