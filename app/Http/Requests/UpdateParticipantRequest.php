<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateParticipantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'company' => 'nullable|between:2,50',
            'position' => 'nullable|between:2,50',
            'aboutMe' => 'nullable|between:10,255',
            'photo' => 'nullable',
            'email' => 'nullable|email'
        ];
    }
}
