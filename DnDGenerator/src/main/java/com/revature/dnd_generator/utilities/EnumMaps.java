package com.revature.dnd_generator.utilities;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import com.revature.dnd_generator.model.Alignment;

public class EnumMaps {

	private static Map<Alignment, String> alignmentToString = null;
	
	public static Map<Alignment, String> getAlignmentToString() {
		if (alignmentToString == null) {
			alignmentToString = new HashMap<>(9);
			alignmentToString.put(Alignment.LAWFUL_GOOD, "LAWFUL_GOOD");
			alignmentToString.put(Alignment.NEUTRAL_GOOD, "NEUTRAL_GOOD");
			alignmentToString.put(Alignment.CHAOTIC_GOOD, "CHAOTIC_GOOD");
			alignmentToString.put(Alignment.LAWFUL_NEUTRAL, "LAWFUL_NEUTRAL");
			alignmentToString.put(Alignment.TRUE_NEUTRAL, "TRUE_NEUTRAL");
			alignmentToString.put(Alignment.CHAOTIC_NEUTRAL, "CHAOTIC_NEUTRAL");
			alignmentToString.put(Alignment.LAWFUL_EVIL, "LAWFUL_EVIL");
			alignmentToString.put(Alignment.NEUTRAL_EVIL, "NEUTRAL_EVIL");
			alignmentToString.put(Alignment.CHAOTIC_EVIL, "CHAOTIC_EVIL");
			alignmentToString = Collections.unmodifiableMap(alignmentToString);
		}
		return alignmentToString;
	}
	
	private EnumMaps() { }
}
