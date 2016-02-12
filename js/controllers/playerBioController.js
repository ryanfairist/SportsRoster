app.controller('playerBioController',['$scope', function($scope){
	$scope.bios=[
		{
			sport:'Soccer',
			name:'Rose Gillbert',
			height: "5'4",
			position:'Forward',
			hometown:'Reisterstown, MD',
			img:'img/soccer.jpg',
			cause:'Soccer Gals in the City'
			
		},

		{
			sport:'Basketball',
			name:'Sierra Cohen',
			height: "5'5",
			position:'Center',
			hometown:'Owings Mills, MD',
			img: 'img/basketball.jpg',
			cause:'Be Great Be You Basketbees'
			
		},

		{
			sport:'BobSled',
			name:'Bridget Jackson',
			height: "5'2",
			position:'Runner',
			hometown:'Anchorage, AK',
			img: 'img/bobsled.jpg',
			cause: 'Ice Pickettes'
			
		},

		{
			sport:'Boxing',
			name:'Landania Tomlinson',
			height: "5'6",
			position:'Tough',
			hometown:'Lancaster, PA',
			img: 'img/boxer.jpg',
			cause:'Tommie Boxers'
			
		},
		{
			sport:'Cheerleader',
			name:'Peytonya Manning',
			height: "5'5",
			position:'Base',
			hometown:'Devener, CO',
			img: 'img/cheerleader.jpg',
			cause: 'City Cheer Stars'
			
		},
         {
			sport:'Golf',
			name:'Rayna Lewis',
			height: "5'7",
			position:'Swinger',
			hometown:'Baltimore, MD',
			img: 'img/golfer.jpg',
			cause: 'Nine Iron Gals'
			
		},

		{
			sport:'RollerSkating',
			name:'Donna McNab',
			height: "5'2",
			position:'Speed Foward',
			hometown:'Philidephia, PA',
			img: 'img/rollergirl.jpg',
			cause: 'Eagle Rollerettes'
			
		},

    	{
			sport:'Ballerina',
			name:'Josephine Nameth',
			height: "5'8",
			position:'Lead Ballerina',
			hometown:'East Rutherford, NJ',
			img: 'img/ballerina.jpg',
			cause:'Josephine Ballet Doves'
			
		},
           {
			sport:'Softball',
			name:'Erin Rogers',
			height: "5'6",
			position:'Pitcher',
			hometown:'Greenbay, WI',
			img: 'img/softball.jpg',
			cause: 'Green Cones Softball'
			
		},

		{
			sport:'Swimming',
			name:'Tonya Brady',
			height: "5'7",
			position:'Diver',
			hometown:'New England, MA',
			img: 'img/swimmer.jpg',
			cause: 'Brady England Swimmers'
			
		},

	     {
			sport:'Outdoor Track',
			name:'Ednna Reed',
			height: "5'6",
			position:'Hurdler',
			hometown:'Baltimore, MD',
			img: 'img/trackstars.jpg',
			cause: 'Believe in Track'
			
		},
         {
			sport:'Volleyball',
			name:'Casandra Newton',
			height: "5'8",
			position:'Setter',
			hometown:'Charolett, NC',
			img: 'img/vollyball.jpg',
			cause: 'Newtown Volleyball Newtonettes'
			}
		
	]
}]);

app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});