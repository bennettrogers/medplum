/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import java.time.Instant;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class CodeableConcept extends FhirResource {
    public static final String RESOURCE_TYPE = "CodeableConcept";
    public static final String PROPERTY_ID = "id";
    public static final String PROPERTY_CODING = "coding";
    public static final String PROPERTY_TEXT = "text";

    public static Builder create() {
        return new Builder();
    }

    public static Builder create(final JsonObject data) {
        return new Builder(data);
    }

    public CodeableConcept(final JsonObject data) {
        super(data);
    }

    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    public String id() {
        return getString(PROPERTY_ID);
    }

    /**
     * A reference to a code defined by a terminology system.
     */
    public java.util.List<Coding> coding() {
        return getList(Coding.class, PROPERTY_CODING);
    }

    /**
     * A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
     */
    public String text() {
        return getString(PROPERTY_TEXT);
    }

    public static class Builder {
        private final JsonObjectBuilder b;

        private Builder() {
            b = Json.createObjectBuilder();
        }

        private Builder(final JsonObject data) {
            b = Json.createObjectBuilder(data);
        }

        public Builder id(final String id) {
            b.add(PROPERTY_ID, id);
            return this;
        }

        public Builder coding(final java.util.List<Coding> coding) {
            b.add(PROPERTY_CODING, FhirObject.toArray(coding));
            return this;
        }

        public Builder text(final String text) {
            b.add(PROPERTY_TEXT, text);
            return this;
        }

        public CodeableConcept build() {
            return new CodeableConcept(b.build());
        }
    }
}