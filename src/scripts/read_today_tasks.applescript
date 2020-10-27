tell application "Things3"
	set theTodos to to dos of list "Today"
	repeat with aTodo in theTodos
		set taskName to name of aTodo
		log taskName
	end repeat
end tell
