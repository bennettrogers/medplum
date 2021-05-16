/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.r4.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class RiskEvidenceSynthesisCertaintySubcomponentTest {

    @Test
    public void testConstructor() {
        assertNotNull(new RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testId() {
        assertEquals("x", RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().id("x").build().id());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testType() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().type(value).build().type());
    }

    @Test
    public void testRating() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().rating(value).build().rating());
    }

    @Test
    public void testNote() {
        final java.util.List<Annotation> value = java.util.Collections.emptyList();
        assertEquals(value, RiskEvidenceSynthesis.RiskEvidenceSynthesisCertaintySubcomponent.create().note(value).build().note());
    }
}