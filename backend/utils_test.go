package main

import (
	"testing"
)

func AssertElement(t *testing.T, expected, actual Element) {
	if actual.UUID != expected.UUID {
		t.Error("Expected element uuid to be " + expected.UUID + ", got " + actual.UUID)
	}

	if expected.Title != actual.Title {
		t.Error("Expected element title to be " + expected.Title + ", got " + actual.Title)
	}

	if expected.ID != actual.ID {
		t.Error("Expected element id to be " + expected.ID + ", got " + actual.ID)
	}

	if expected.Body != actual.Body {
		t.Error("Expected element body to be " + expected.Body + ", got " + actual.Body)
	}
}
