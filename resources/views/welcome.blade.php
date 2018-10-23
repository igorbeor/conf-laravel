<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <nav class="navbar navbar-dark bg-dark">
        @if (Route::has('login'))

            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a href="{{ url('/') }}" class="nav-link">Form</a></li>
            </ul>
            <ul class="navbar-nav">
                @auth
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('logout') }}"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                              style="display: none;">{{ csrf_field() }}</form>
                    </li>
                @else
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">Login</a>
                    </li>
                @endauth
            </ul>
        @endif
    </nav>
</div>
<div class="container">
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Report subject</th>
            <th>Email</th>
            @auth
                @if ( Auth::user()->isAdmin() )
                    <th>Hidden</th>
                @endif
            @endauth
        </tr>
        </thead>
        @auth
            @if ( Auth::user()->isAdmin() )
                @foreach($participants as $participant)
                    <tr>
                        <td>
                            <img class="photo"
                                 src="/storage/photos/{{ isset($participant->photo) ? $participant->photo : 'default.png' }}">
                        </td>
                        <td>{{ $participant->first_name . $participant->last_name }}</td>
                        <td>{{ $participant->report_subject }}</td>
                        <td class="email">{{ $participant->email }}</td>
                        <td>
                            <input type="checkbox" {{ $participant->hidden ? "checked" : "" }}>
                        </td>
                    </tr>
                @endforeach
            @endif
        @else
            @foreach($participants as $participant)
                @if ($participant->hidden == 0)
                    <tr>
                        <td>
                            <img class="photo"
                                 src="/storage/photos/{{ isset($participant->photo) ? $participant->photo : 'default.png' }}">
                        </td>
                        <td>{{ $participant->first_name . $participant->last_name }}</td>
                        <td>{{ $participant->report_subject }}</td>
                        <td class="email">{{ $participant->email }}</td>
                    </tr>
                @endif
            @endforeach
        @endauth
    </table>
</div>
</body>
<script src="{{ asset('js/submit.js') }}"></script>
</html>
