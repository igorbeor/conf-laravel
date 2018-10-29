<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = [
        'firstName',
        'lastName',
        'birthdate',
        'reportSubject',
        'country',
        'phone',
        'email',
        'company',
        'position',
        'aboutMe',
        'photo',
        'hidden'
    ];
}
