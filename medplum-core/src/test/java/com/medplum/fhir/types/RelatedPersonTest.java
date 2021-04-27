/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class RelatedPersonTest {

    @Test
    public void testConstructor() {
        assertNotNull(new RelatedPerson(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(RelatedPerson.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testResourceType() {
        assertEquals("x", RelatedPerson.create().resourceType("x").build().resourceType());
    }

    @Test
    public void testId() {
        assertEquals("x", RelatedPerson.create().id("x").build().id());
    }

    @Test
    public void testMeta() {
        final Meta value = Meta.create().build();
        assertEquals(value, RelatedPerson.create().meta(value).build().meta());
    }

    @Test
    public void testImplicitRules() {
        assertEquals("x", RelatedPerson.create().implicitRules("x").build().implicitRules());
    }

    @Test
    public void testLanguage() {
        assertEquals("x", RelatedPerson.create().language("x").build().language());
    }

    @Test
    public void testText() {
        final Narrative value = Narrative.create().build();
        assertEquals(value, RelatedPerson.create().text(value).build().text());
    }

    @Test
    public void testContained() {
        final java.util.List<FhirResource> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().contained(value).build().contained());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testIdentifier() {
        final java.util.List<Identifier> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().identifier(value).build().identifier());
    }

    @Test
    public void testActive() {
        assertEquals(true, RelatedPerson.create().active(true).build().active());
    }

    @Test
    public void testPatient() {
        final Reference value = Reference.create().build();
        assertEquals(value, RelatedPerson.create().patient(value).build().patient());
    }

    @Test
    public void testRelationship() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().relationship(value).build().relationship());
    }

    @Test
    public void testName() {
        final java.util.List<HumanName> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().name(value).build().name());
    }

    @Test
    public void testTelecom() {
        final java.util.List<ContactPoint> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().telecom(value).build().telecom());
    }

    @Test
    public void testGender() {
        assertEquals("x", RelatedPerson.create().gender("x").build().gender());
    }

    @Test
    public void testBirthDate() {
        final java.time.LocalDate value = java.time.LocalDate.now();
        assertEquals(value, RelatedPerson.create().birthDate(value).build().birthDate());
    }

    @Test
    public void testAddress() {
        final java.util.List<Address> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().address(value).build().address());
    }

    @Test
    public void testPhoto() {
        final java.util.List<Attachment> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().photo(value).build().photo());
    }

    @Test
    public void testPeriod() {
        final Period value = Period.create().build();
        assertEquals(value, RelatedPerson.create().period(value).build().period());
    }

    @Test
    public void testCommunication() {
        final java.util.List<RelatedPerson.RelatedPersonCommunication> value = java.util.Collections.emptyList();
        assertEquals(value, RelatedPerson.create().communication(value).build().communication());
    }
}