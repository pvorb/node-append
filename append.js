// Not enumerable
Object.defineProperty(Object.prototype, "append",
	{
		value: function(obj) {
				for (var prop in obj)
					if (obj[prop] != undefined)
						this[prop] = obj[prop];
				return this;
			},
		enumerable: false }
);
