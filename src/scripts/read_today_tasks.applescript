tell application "Things3"
	set theTodos to to dos of list "Today"
	repeat with aTodo in theTodos
		set taskName to name of aTodo
		set todoStatus to status of aTodo
		if ((todoStatus as string) = "open") then
			log taskName
		end if
	end repeat
end tell
