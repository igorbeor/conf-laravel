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
            'firstName' => 'required|alpha|between:2,50',
            'lastName' => 'required|alpha|between:2,50',
            'birthdate' => 'required|date|after:01-01-1900|before:today',
            'reportSubject' => 'required|between:10,190',
            'country' => 'required|between:2,100',
            'phone' => array('required', 'regex:/^\+?[^a-zA-Z]{5,}$/'),
            'email' => 'required|email|unique:participants,email'

        ];
    }
}
