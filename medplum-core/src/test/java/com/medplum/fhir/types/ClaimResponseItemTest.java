/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class ClaimResponseItemTest {

    @Test
    public void testConstructor() {
        assertNotNull(new ClaimResponse.ClaimResponseItem(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(ClaimResponse.ClaimResponseItem.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testId() {
        assertEquals("x", ClaimResponse.ClaimResponseItem.create().id("x").build().id());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, ClaimResponse.ClaimResponseItem.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, ClaimResponse.ClaimResponseItem.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testItemSequence() {
        assertEquals(1, ClaimResponse.ClaimResponseItem.create().itemSequence(1).build().itemSequence());
    }

    @Test
    public void testNoteNumber() {
        final java.util.List<Integer> value = java.util.Collections.emptyList();
        assertEquals(value, ClaimResponse.ClaimResponseItem.create().noteNumber(value).build().noteNumber());
    }

    @Test
    public void testAdjudication() {
        final java.util.List<ClaimResponse.ClaimResponseAdjudication> value = java.util.Collections.emptyList();
        assertEquals(value, ClaimResponse.ClaimResponseItem.create().adjudication(value).build().adjudication());
    }

    @Test
    public void testDetail() {
        final java.util.List<ClaimResponse.ClaimResponseDetail> value = java.util.Collections.emptyList();
        assertEquals(value, ClaimResponse.ClaimResponseItem.create().detail(value).build().detail());
    }
}