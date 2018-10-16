@extends('layouts.app')
@section('content')
    <div class="container">
        <h2>To participate in the conference, please fill out the form</h2>
        <form action="/form" method="post">

            {!! csrf_field() !!}
            <div class="form-group row{{ $errors->has('first_name') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="first_name">First name</label>
                <input type="text" class="form-control col-sm-10" id="first_name" name="first_name"
                       placeholder="First name" value="{{ old('first_name') }}">
                @if($errors->has('first_name'))
                    <span class="help-block">{{ $errors->first('first_name') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('last_name') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="last_name">Last name</label>
                <input type="text" class="form-control col-sm-10" id="last_name" name="last_name"
                       placeholder="Last name" value="{{ old('last_name') }}">
                @if($errors->has('last_name'))
                    <span class="help-block">{{ $errors->first('last_name') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('birthdate') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="birthdate">Birthdate</label>
                <input type="date" class="form-control col-sm-10" id="birthdate" name="birthdate"
                       value="{{ old('birthdate') }}">
                @if($errors->has('birthdate'))
                    <span class="help-block">{{ $errors->first('birthdate') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('report_subject') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="report_subject">Report subject</label>
                <textarea class="form-control col-sm-10" id="report_subject"
                          name="report_subject">{{ old('report_subject') }}</textarea>
                @if($errors->has('report_subject'))
                    <span class="help-block">{{ $errors->first('report_subject') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('country') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="country">Country</label>
                <select class="form-control col-sm-10" id="country" name="country">
                    <option value="" disabled selected>Select country</option>
                    @foreach($countries as $country)
                        <option value="{{ $country }}">{{ $country }}</option>
                    @endforeach
                </select>
                @if($errors->has('country'))
                    <span class="help-block">{{ $errors->first('country') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('phone') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="phone">Phone number</label>
                <input type="tel" class="form-control col-sm-10" id="phone" name="phone" placeholder="(000)000-0000"
                       value="{{ old('phone') }}">
                @if($errors->has('phone'))
                    <span class="help-block">{{ $errors->first('phone') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('email') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="email">Email</label>
                <input type="email" class="form-control col-sm-10" id="email" name="email"
                       placeholder="john@example.com" value="{{ old('email') }}">
                @if($errors->has('email'))
                    <span class="help-block">{{ $errors->first('email') }}</span>
                @endif
            </div>
            <div class="row justify-content-md-end">
                <button type="submit" class="btn btn-default">Next</button>
            </div>

        </form>
    </div>
@endsection