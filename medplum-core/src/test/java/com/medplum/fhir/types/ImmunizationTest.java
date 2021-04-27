/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class ImmunizationTest {

    @Test
    public void testConstructor() {
        assertNotNull(new Immunization(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(Immunization.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testResourceType() {
        assertEquals("x", Immunization.create().resourceType("x").build().resourceType());
    }

    @Test
    public void testId() {
        assertEquals("x", Immunization.create().id("x").build().id());
    }

    @Test
    public void testMeta() {
        final Meta value = Meta.create().build();
        assertEquals(value, Immunization.create().meta(value).build().meta());
    }

    @Test
    public void testImplicitRules() {
        assertEquals("x", Immunization.create().implicitRules("x").build().implicitRules());
    }

    @Test
    public void testLanguage() {
        assertEquals("x", Immunization.create().language("x").build().language());
    }

    @Test
    public void testText() {
        final Narrative value = Narrative.create().build();
        assertEquals(value, Immunization.create().text(value).build().text());
    }

    @Test
    public void testContained() {
        final java.util.List<FhirResource> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().contained(value).build().contained());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testIdentifier() {
        final java.util.List<Identifier> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().identifier(value).build().identifier());
    }

    @Test
    public void testStatus() {
        assertEquals("x", Immunization.create().status("x").build().status());
    }

    @Test
    public void testStatusReason() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().statusReason(value).build().statusReason());
    }

    @Test
    public void testVaccineCode() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().vaccineCode(value).build().vaccineCode());
    }

    @Test
    public void testPatient() {
        final Reference value = Reference.create().build();
        assertEquals(value, Immunization.create().patient(value).build().patient());
    }

    @Test
    public void testEncounter() {
        final Reference value = Reference.create().build();
        assertEquals(value, Immunization.create().encounter(value).build().encounter());
    }

    @Test
    public void testOccurrenceDateTime() {
        assertEquals("x", Immunization.create().occurrenceDateTime("x").build().occurrenceDateTime());
    }

    @Test
    public void testOccurrenceString() {
        assertEquals("x", Immunization.create().occurrenceString("x").build().occurrenceString());
    }

    @Test
    public void testRecorded() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, Immunization.create().recorded(value).build().recorded());
    }

    @Test
    public void testPrimarySource() {
        assertEquals(true, Immunization.create().primarySource(true).build().primarySource());
    }

    @Test
    public void testReportOrigin() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().reportOrigin(value).build().reportOrigin());
    }

    @Test
    public void testLocation() {
        final Reference value = Reference.create().build();
        assertEquals(value, Immunization.create().location(value).build().location());
    }

    @Test
    public void testManufacturer() {
        final Reference value = Reference.create().build();
        assertEquals(value, Immunization.create().manufacturer(value).build().manufacturer());
    }

    @Test
    public void testLotNumber() {
        assertEquals("x", Immunization.create().lotNumber("x").build().lotNumber());
    }

    @Test
    public void testExpirationDate() {
        final java.time.LocalDate value = java.time.LocalDate.now();
        assertEquals(value, Immunization.create().expirationDate(value).build().expirationDate());
    }

    @Test
    public void testSite() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().site(value).build().site());
    }

    @Test
    public void testRoute() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().route(value).build().route());
    }

    @Test
    public void testDoseQuantity() {
        final Quantity value = Quantity.create().build();
        assertEquals(value, Immunization.create().doseQuantity(value).build().doseQuantity());
    }

    @Test
    public void testPerformer() {
        final java.util.List<Immunization.ImmunizationPerformer> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().performer(value).build().performer());
    }

    @Test
    public void testNote() {
        final java.util.List<Annotation> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().note(value).build().note());
    }

    @Test
    public void testReasonCode() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().reasonCode(value).build().reasonCode());
    }

    @Test
    public void testReasonReference() {
        final java.util.List<Reference> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().reasonReference(value).build().reasonReference());
    }

    @Test
    public void testIsSubpotent() {
        assertEquals(true, Immunization.create().isSubpotent(true).build().isSubpotent());
    }

    @Test
    public void testSubpotentReason() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().subpotentReason(value).build().subpotentReason());
    }

    @Test
    public void testEducation() {
        final java.util.List<Immunization.ImmunizationEducation> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().education(value).build().education());
    }

    @Test
    public void testProgramEligibility() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().programEligibility(value).build().programEligibility());
    }

    @Test
    public void testFundingSource() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Immunization.create().fundingSource(value).build().fundingSource());
    }

    @Test
    public void testReaction() {
        final java.util.List<Immunization.ImmunizationReaction> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().reaction(value).build().reaction());
    }

    @Test
    public void testProtocolApplied() {
        final java.util.List<Immunization.ImmunizationProtocolApplied> value = java.util.Collections.emptyList();
        assertEquals(value, Immunization.create().protocolApplied(value).build().protocolApplied());
    }
}