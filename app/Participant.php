<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'birthdate',
        'report_subject',
        'country',
        'phone',
        'email',
        'company',
        'position',
        'about_me',
        'photo',
        'hidden'
    ];
}
