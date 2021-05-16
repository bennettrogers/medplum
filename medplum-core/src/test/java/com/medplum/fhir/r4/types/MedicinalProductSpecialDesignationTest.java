/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.r4.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class MedicinalProductSpecialDesignationTest {

    @Test
    public void testConstructor() {
        assertNotNull(new MedicinalProduct.MedicinalProductSpecialDesignation(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(MedicinalProduct.MedicinalProductSpecialDesignation.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testId() {
        assertEquals("x", MedicinalProduct.MedicinalProductSpecialDesignation.create().id("x").build().id());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testIdentifier() {
        final java.util.List<Identifier> value = java.util.Collections.emptyList();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().identifier(value).build().identifier());
    }

    @Test
    public void testType() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().type(value).build().type());
    }

    @Test
    public void testIntendedUse() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().intendedUse(value).build().intendedUse());
    }

    @Test
    public void testIndicationCodeableConcept() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().indicationCodeableConcept(value).build().indicationCodeableConcept());
    }

    @Test
    public void testIndicationReference() {
        final Reference value = Reference.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().indicationReference(value).build().indicationReference());
    }

    @Test
    public void testStatus() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().status(value).build().status());
    }

    @Test
    public void testDate() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().date(value).build().date());
    }

    @Test
    public void testSpecies() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, MedicinalProduct.MedicinalProductSpecialDesignation.create().species(value).build().species());
    }
}