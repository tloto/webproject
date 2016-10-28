
<html>
	<head>
		<title>App Name - @yield('title')</title>
	</head>
	<body>
		@section('sidebar')
		this is the master sidebar
		@show
		<div class="container">
		@yield('content')			
		</div>
	</body>
</html>