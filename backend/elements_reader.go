package main

func GetAllElementsFromLevel(level string) ([]Element, error) {
	elements := []Element {
		Element {
			UUID:  "011fb159-276d-429f-99ab-e595c42fdb70",
			ID:    "EL-0602",
			Title: "Title EL-602",
			Body: "**This** is the *body* of EL-0602",
		},
		Element{
			UUID:  "d61d75a7-ccf3-4b8f-9d3b-59db89cb5050",
			ID:    "EL-0603",
			Title: "Title EL-603",
			Body: "**This** is the *body* of EL-0603",
		},
	}

	return elements, nil
}
