/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class ListEntryTest {

    @Test
    public void testConstructor() {
        assertNotNull(new List.ListEntry(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(List.ListEntry.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testId() {
        assertEquals("x", List.ListEntry.create().id("x").build().id());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, List.ListEntry.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, List.ListEntry.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testFlag() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, List.ListEntry.create().flag(value).build().flag());
    }

    @Test
    public void testDeleted() {
        assertEquals(true, List.ListEntry.create().deleted(true).build().deleted());
    }

    @Test
    public void testDate() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, List.ListEntry.create().date(value).build().date());
    }

    @Test
    public void testItem() {
        final Reference value = Reference.create().build();
        assertEquals(value, List.ListEntry.create().item(value).build().item());
    }
}