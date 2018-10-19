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
            'company' => 'alpha_num|between:2,50',
            'position' => 'required|alpha|between:2,50',
            'about_me' => 'required|between:10,255',
            'photo' => 'image'
        ];
    }
}
