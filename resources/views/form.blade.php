@extends('layouts.app')
@section('content')

    <div id="map"></div>
    <div class="container">
        <h2>To participate in the conference, please fill out the form</h2>
        <a href="/list">All members
            <span class="badge badge-secondary">
            {{ $pcount }}
        </span>
        </a>
    </div>
    <div class="container">
        <form id="form">

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
                <input type="tel" class="form-control col-sm-10" id="phone" name="phone" placeholder="+1(555)555-5555"
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


    <div class="container" hidden>
        <form id="additional" action="/participant/update" method="post">
            {!! csrf_field() !!}
            <div class="form-group row{{ $errors->has('company') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="company">Company</label>
                <input type="text" class="form-control col-sm-10" id="company" name="company"
                       placeholder="Company" value="{{ old('company') }}">
                @if($errors->has('company'))
                    <span class="help-block">{{ $errors->first('company') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('position') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="position">Position</label>
                <input type="text" class="form-control col-sm-10" id="position" name="position"
                       placeholder="Position" value="{{ old('position') }}">
                @if($errors->has('position'))
                    <span class="help-block">{{ $errors->first('position') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('about_me') ? ' has-error' : '' }}">
                <label class="col-sm-2" for="about_me">First name</label>
                <textarea class="form-control col-sm-10" id="about_me" name="about_me">{{ old('about_me') }}</textarea>
                @if($errors->has('about_me'))
                    <span class="help-block">{{ $errors->first('about_me') }}</span>
                @endif
            </div>

            <div class="form-group row{{ $errors->has('about_me') ? ' has-error' : '' }}">
                <label class="col-sm-2 col-form-label" for="photo">Photo</label>
                <input type="file" id="photo" name="photo">
                @if($errors->has('photo'))
                    <span class="help-block">{{ $errors->first('photo') }}</span>
                @endif
            </div>

            <div class="row justify-content-md-end">
                <button type="submit" class="btn btn-default">Next</button>
            </div>

        </form>
    </div>

    <script>
        function initMap() {
            var uluru = {lat: 34.101283, lng: -118.343705};
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 16, center: uluru});
            var marker = new google.maps.Marker({position: uluru, map: map});
        }
    </script>
    {{--<script>--}}
        {{----}}
    {{--</script>--}}
@endsection